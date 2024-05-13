<?php

namespace App\Http\Requests;

class PaymentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'user_id'       => 'required|numeric',
            'booking_id' => 'required|numeric',
            'status' => 'required|max:255',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array
     * Custom validation message
     */
    public function messages(): array
    {
        return [
            'user_id.required'  => 'Please give user id',
            'user_id.numeric'       => 'Please give user id as numaric characters',
            'booking_id.required'  => 'Please give booking id',
            'booking_id.numeric'       => 'Please give booking id as numaric characters',
            'status.required'  => 'Please give payment status',
            'status.numeric'       => 'Please give payment status as string characters',
        ];
    }
}
