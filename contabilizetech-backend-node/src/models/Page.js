import { Schema, model } from 'mongoose';

const SectionSchema = new Schema({
  componentName: { type: String, required: true },
  order: { type: Number, required: true },
  content: { type: Object }, // <-- CORREÇÃO APLICADA AQUI
});

const PageSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  sections: [SectionSchema],
});

const Page = model('Page', PageSchema);
export default Page;