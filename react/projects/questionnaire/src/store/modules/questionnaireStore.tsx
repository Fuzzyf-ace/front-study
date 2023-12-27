import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../model/question";
import { v4 as uuidv4 } from "uuid";
import { Questionnaire } from "../../model/questionnaire";

type ActionType = {
  payload: Question;
  type: string;
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
  ],
};

const questionnaireStore = createSlice({
  name: "questionnaire",
  initialState: {
    questionnaire: questionnaire,
  },
  reducers: {
    addQuestion: (state, action: ActionType) => {
      state.questionnaire.questions.push(action.payload);
    },
    fetchQuestionnaire: (state) => {
      state.questionnaire = questionnaire;
    },
  },
});

export const { addQuestion, fetchQuestionnaire } = questionnaireStore.actions;

export default questionnaireStore.reducer;
