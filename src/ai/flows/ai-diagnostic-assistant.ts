'use server';
/**
 * @fileOverview An AI assistant that analyzes environment logs and monitoring data to diagnose issues.
 *
 * - diagnoseEnvironment - A function that handles the AI-powered diagnostic process.
 * - DiagnosticInput - The input type for the diagnoseEnvironment function.
 * - DiagnosticOutput - The return type for the diagnoseEnvironment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnosticInputSchema = z.object({
  logs: z
    .string()
    .describe('Recent streaming log entries from the environment.'),
  monitoringData: z
    .string()
    .describe('Recent monitoring metrics and events from the environment.'),
});
export type DiagnosticInput = z.infer<typeof DiagnosticInputSchema>;

const DiagnosticOutputSchema = z.object({
  summary: z.string().describe('A brief overall summary of the diagnostic.'),
  anomalies: z
    .array(z.string())
    .describe('A list of identified anomalies or unusual patterns.'),
  rootCauses: z
    .array(z.string())
    .describe('A list of potential root causes for the identified anomalies.'),
  troubleshootingSteps: z
    .array(z.string())
    .describe('Actionable steps to troubleshoot and resolve the issues.'),
});
export type DiagnosticOutput = z.infer<typeof DiagnosticOutputSchema>;

export async function diagnoseEnvironment(
  input: DiagnosticInput
): Promise<DiagnosticOutput> {
  return aiDiagnosticAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDiagnosticAssistantPrompt',
  input: {schema: DiagnosticInputSchema},
  output: {schema: DiagnosticOutputSchema},
  prompt: `You are an expert DevOps diagnostic assistant. Your task is to analyze the provided environment logs and monitoring data to identify anomalies, suggest root causes, and recommend actionable troubleshooting steps. Provide a clear summary of your findings.

Here are the recent logs:
{{{logs}}}

Here is the recent monitoring data:
{{{monitoringData}}}

Based on this information, please provide:
- A concise summary of the current situation.
- A list of any anomalies you detect.
- A list of potential root causes.
- A list of specific, actionable troubleshooting steps.`,
});

const aiDiagnosticAssistantFlow = ai.defineFlow(
  {
    name: 'aiDiagnosticAssistantFlow',
    inputSchema: DiagnosticInputSchema,
    outputSchema: DiagnosticOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get diagnostic output from the model.');
    }
    return output;
  }
);
