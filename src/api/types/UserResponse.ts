/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "..";

export interface UserResponse {
    subscription: ElevenLabs.SubscriptionResponse;
    is_new_user: boolean;
    xi_api_key: string;
    can_use_delayed_payment_methods: boolean;
}
