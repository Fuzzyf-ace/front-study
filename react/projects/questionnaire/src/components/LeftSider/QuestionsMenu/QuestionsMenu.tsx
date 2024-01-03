import { List } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../../../model/question";

import "../styles/index.css";

import { RootState } from "../../../store";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import QuestionMenuItem from "./QuestionMenuItem";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { moveQuestion } from "../../../store/modules/questionnaireStore";
const QuestionsMenu: FC = () => {
  const questions = useSelector(
    (state: RootState) => state.questionnaire.questionnaire.questions
  );

  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      dispatch(
        moveQuestion({
          dragId: active?.id as string,
          hoverId: over?.id as string,
        })
      );
    }
  }
  return (
    <div>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext
          items={questions}
          strategy={verticalListSortingStrategy}
        >
          <List
            dataSource={questions}
            renderItem={(question: Question) => (
              <QuestionMenuItem question={question} />
            )}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default QuestionsMenu;
