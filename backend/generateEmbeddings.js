const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Book = require('./models/books');
const { OpenAI } = require('openai');

console.log("🚀 SCRIPT STARTING...");

async function run() {
<<<<<<< HEAD
    try {
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            console.log("❌ ERROR: OPENAI_API_KEY is missing from .env!");
            process.exit(1);
        }

        console.log("✅ API Key detected. Initializing OpenAI...");
        const openai = new OpenAI({ apiKey: apiKey });

        console.log("⏳ Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB CONNECTED");

        const books = await Book.find();
        console.log(`📚 Found ${books.length} books.`);

        for (const book of books) {
            console.log(`\n📖 Processing: ${book.subject} Grade ${book.grade}`);
            for (let i = 0; i < book.toc.length; i++) {
                const unit = book.toc[i];
                const topicEmbeddings = [];
                console.log(`   📂 Unit: ${unit.unit}`);

                for (const topic of unit.topics) {
                    console.log(`      🔹 AI Embedding: ${topic}`);
                    const res = await openai.embeddings.create({
                        model: 'text-embedding-3-small',
                        input: topic
                    });
                    topicEmbeddings.push({ topicName: topic, vector: res.data[0].embedding });
                }

                await Book.updateOne(
                    { _id: book._id, "toc.unit": unit.unit },
                    { $set: { "toc.$.embeddings": topicEmbeddings } }
                );
            }
        }
        console.log("\n🎉 SUCCESS: ALL EMBEDDINGS SAVED!");
        process.exit(0);
    } catch (err) {
        console.error("\n❌ ERROR:", err.message);
        process.exit(1);
    }
=======
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.log("❌ ERROR: OPENAI_API_KEY is missing from .env!");
      process.exit(1);
    }

    console.log("✅ API Key detected. Initializing OpenAI...");
    const openai = new OpenAI({ apiKey: apiKey });

    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB CONNECTED");

    const books = await Book.find();
    console.log(`📚 Found ${books.length} books.`);

    for (const book of books) {
      console.log(`\n📖 Processing: ${book.subject} Grade ${book.grade}`);
      for (let i = 0; i < book.toc.length; i++) {
        const unit = book.toc[i];
        const topicEmbeddings = [];
        console.log(`   📂 Unit: ${unit.unit}`);

        for (const topic of unit.topics) {
          console.log(`      🔹 AI Embedding: ${topic}`);
          const res = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: topic
          });
          topicEmbeddings.push({ topicName: topic, vector: res.data[0].embedding });
        }

        await Book.updateOne(
          { _id: book._id, "toc.unit": unit.unit },
          { $set: { "toc.$.embeddings": topicEmbeddings } }
        );
      }
    }
    console.log("\n🎉 SUCCESS: ALL EMBEDDINGS SAVED!");
    process.exit(0);
  } catch (err) {
    console.error("\n❌ ERROR:", err.message);
    process.exit(1);
  }
>>>>>>> 54c6975 (sosm)
}

run();
