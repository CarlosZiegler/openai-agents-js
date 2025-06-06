import {
  JsonObjectSchema,
  ModelSettingsToolChoice,
} from '@openai/agents-core/types';

export type RealtimeClientMessage = {
  type: string;
  [key: string]: any;
};

export type RealtimeUserInput =
  | string
  | {
      type: 'message';
      role: 'user';
      content: {
        type: 'input_text';
        text: string;
      }[];
    };

export type RealtimeAudioFormat =
  | 'pcm16'
  | 'g711_ulaw'
  | 'g711_alaw'
  | (string & {});

export type RealtimeTracingConfig =
  | {
      workflow_name?: string;
      group_id?: string;
      metadata?: Record<string, any>;
    }
  | 'auto';

export type RealtimeSessionConfig = {
  model: string;
  instructions: string;
  modalities: ('text' | 'audio')[];
  voice: string;
  inputAudioFormat: RealtimeAudioFormat;
  outputAudioFormat: RealtimeAudioFormat;
  inputAudioTranscription: Record<string, any>;
  turnDetection: Record<string, any>;
  toolChoice: ModelSettingsToolChoice;
  tools: FunctionToolDefinition[];
  tracing?: RealtimeTracingConfig | null;
  providerData?: Record<string, any>;
};

export type FunctionToolDefinition = {
  type: 'function';
  name: string;
  description: string;
  parameters: JsonObjectSchema<any>;
  strict: boolean;
};
