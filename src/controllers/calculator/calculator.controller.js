import { Router } from 'express';

const router = Router();

router.post('/add', async (req, res) => {
  const { a, b } = req.body;
  res.json({ operation: 'Suma', result: a + b });
});

router.post('/sub', async (req, res) => {
  const { a, b } = req.body;
  res.json({ operation: 'Resta', result: a - b });
});

router.post('/mul', async (req, res) => {
  const { a, b } = req.body;
  res.json({ operation: 'Multiplicación', result: a * b });
});

router.post('/div', async (req, res) => {
  const { a, b } = req.body;
  if (b === 0)
    return res.status(400).json({
      operation: 'División',
      error: 'No se permite división por cero',
    });

  res.json({ operation: 'División', result: a / b });
});

export default router;
