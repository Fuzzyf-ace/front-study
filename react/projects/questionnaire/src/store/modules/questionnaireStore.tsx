import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../model/question";
import { v4 as uuidv4 } from "uuid";
import { Questionnaire } from "../../model/questionnaire";

type ActionType = {
  payload: Question;
  type: string;
};

const DEFAULT_QUESTIONNAIRE: Questionnaire = {
  title: "Questionnaire",
  description: "This is a questionnaire",
  questions: [],
};
// static data
const questionnaire: Questionnaire = {
  title: "Questionnaire",
  description: "This is a questionnaire",
  questions: [
    {
      id: uuidv4(),
      questionType: "Title",
      questionProps: {
        title: "this is a level 1 Title",
        level: 1,
      },
    },
    {
      id: uuidv4(),
      questionType: "Title",
      questionProps: {
        title: "this is a level 5 Title",
        level: 5,
      },
    },
  ],
};

const questionnaireStore = createSlice({
  name: "questionnaire",
  initialState: {
    questionnaire: DEFAULT_QUESTIONNAIRE,
    selectedQuestion: null as Question,
  },
  reducers: {
    addQuestion: (state, action: ActionType) => {
      state.questionnaire.questions.push(action.payload);
    },
    fetchQuestionnaire: (state) => {
      state.questionnaire = questionnaire;
      state.selectedQuestion = questionnaire.questions[0];
    },
    setSelectedQuestion: (state, action) => {
      const id = action.payload;
      const question = state.questionnaire.questions.find(
        (question) => question?.id === id
      );
      if (question) {
        state.selectedQuestion = question;
      }
    },
    editQuestionProps: (state, action) => {
      const { id, props } = action.payload;
      const question = state.questionnaire.questions.find(
        (question) => question?.id === id
      );
      if (question) {
        question.questionProps = {
          ...question.questionProps,
          ...props,
        };
        state.selectedQuestion = question;
      }
    },
    toggleLockSelectedQuestion: (state) => {
      if (state.selectedQuestion) {
        const question = state.questionnaire.questions.find(
          (question) => question?.id === state.selectedQuestion?.id
        );
        if (question) {
          if (state.selectedQuestion.locked) {
            state.selectedQuestion.locked = false;
            question.locked = false;
          } else {
            state.selectedQuestion.locked = true;
            question.locked = true;
          }
        }
      }
    },
    deleteSelectedQuestion: (state) => {
      if (state.selectedQuestion) {
        const index = state.questionnaire.questions.findIndex(
          (question) => question?.id === state.selectedQuestion?.id
        );
        if (index > -1) {
          if (index + 1 < state.questionnaire.questions.length) {
            state.selectedQuestion = state.questionnaire.questions[index + 1];
          } else if (index - 1 > -1) {
            state.selectedQuestion = state.questionnaire.questions[index - 1];
          } else {
            state.selectedQuestion = null;
          }
          state.questionnaire.questions.splice(index, 1);
        }
      }
    },
  },
});

export const {
  addQuestion,
  fetchQuestionnaire,
  setSelectedQuestion,
  editQuestionProps,
  toggleLockSelectedQuestion,
  deleteSelectedQuestion,
} = questionnaireStore.actions;

export default questionnaireStore.reducer;
