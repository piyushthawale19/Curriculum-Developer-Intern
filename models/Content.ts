import mongoose, { Schema, Document } from 'mongoose';

export interface IContent extends Document {
  lessonTitle: string;
  lessonGoal: string;
  starterLink: string;
  finalLink: string;
  pdfLink: string;
  topics: {
    title: string;
    description: string;
    example: string;
  }[];
  learningOutcomes: string[];
  teacherAgenda: {
    time: string;
    activity: string;
  }[];
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
  debuggingTips: string[];
  updatedAt: Date;
}

const ContentSchema: Schema = new Schema({
  lessonTitle: { type: String, required: true },
  lessonGoal: { type: String, required: true },
  starterLink: { type: String, required: true },
  finalLink: { type: String, required: true },
  pdfLink: { type: String, required: true },
  topics: [{
    title: String,
    description: String,
    example: String,
  }],
  learningOutcomes: [String],
  teacherAgenda: [{
    time: String,
    activity: String,
  }],
  quiz: [{
    question: String,
    options: [String],
    answer: String,
  }],
  debuggingTips: [String],
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);
