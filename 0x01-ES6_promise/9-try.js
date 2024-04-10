export default function guardrail(mathFunction) {
  const equation = [];

  try {
    equation.push(mathFunction());
  } catch (err) {
    equation.push(err.toString());
  } finally {
    equation.push('Guardrail was processed');
  }
  return equation;
}
