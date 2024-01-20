import React from "react";
import Menu, { MenuProps } from ".";
import MenuItem from "./menuItem";

// why this import is needed?
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import SubMenu from "./subMenu";
const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  menuMode: "vertical",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
        <MenuItem>drop2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
  const cssFile: string = `
  .submenu {
    display: none;
    }
        .submenu.menu-opened {
            display: block;
          }
        `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.container.getElementsByClassName(
      "menu"
    )[0] as HTMLElement;
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(activeElement).toHaveClass("menu-item active");
    expect(disabledElement).toBeInTheDocument();
    expect(disabledElement).toHaveClass("menu-item disabled");
  });

  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("xyz");
    expect(thirdItem).toBeInTheDocument();
    expect(thirdItem).not.toHaveClass("active");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });

  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.container.getElementsByClassName(
      "menu-vertical"
    )[0] as HTMLElement;
    expect(menuElement).toBeInTheDocument();
  });

  it("should show dropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("drop1")).not.toBeInTheDocument();
    const dropdownElement = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    // 异步的代码需要等待执行完毕，等待dropdown出现
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).not.toBeVisible();
    });
  });
});
