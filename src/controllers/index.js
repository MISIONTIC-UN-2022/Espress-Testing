import CalculatorRouter from './calculator/calculator.controller';

export const setUpControllers = (app) => {
  app.use('/calc', CalculatorRouter);
};
