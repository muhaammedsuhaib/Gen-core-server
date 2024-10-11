import express from 'express';
import cors from 'cors';
import { port } from './config/dotenv_config.js';
import aiRoutes from './routes/ai_routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', aiRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
