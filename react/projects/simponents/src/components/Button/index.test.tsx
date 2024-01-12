import { cleanup, fireEvent, render } from "@testing-library/react";
import Button from ".";

describe("test Button Component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button>Button</Button>);
    const element = wrapper.getByText("Button");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-primary btn-md");
  });

  it("should render the correct component based on different props", () => {
    const wrapper = render(
      <Button btnType="danger" size="lg">
        Button
      </Button>
    );
    const element = wrapper.getByText("Button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn btn-danger btn-lg");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType="link" href="https://www.google.com">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link btn-md");
  });

  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button disabled={true}>Button</Button>);
    const element = wrapper.getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(element.disabled).toBeTruthy();
  });
});
