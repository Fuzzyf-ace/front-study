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
        title: "this is a level 2 Title",
        level: 2,
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
  },
});

export const { addQuestion, fetchQuestionnaire, setSelectedQuestion } =
  questionnaireStore.actions;

export default questionnaireStore.reducer;
