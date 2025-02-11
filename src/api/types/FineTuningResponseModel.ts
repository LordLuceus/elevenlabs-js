/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "..";

export interface FineTuningResponseModel {
    is_allowed_to_fine_tune: boolean;
    fine_tuning_requested: boolean;
    finetuning_state: ElevenLabs.FinetuningState;
    verification_failures: string[];
    verification_attempts_count: number;
    manual_verification_requested: boolean;
    verification_attempts?: ElevenLabs.VerificationAttemptResponseModel[];
    slice_ids?: string[];
    manual_verification?: ElevenLabs.ManualVerificationResponseModel;
    language?: string;
}
