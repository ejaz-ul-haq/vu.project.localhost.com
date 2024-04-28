<?php

namespace App\Http\Requests;

class BookingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'trip_id'       => 'required|numeric',
            'payment_id' => 'required|numeric',
//            'image'       => 'nullable|image|mimes:png,jpg,jpeg,gif,webp|max:2048',
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
            'trip_id.required'  => 'Please give trip id',
            'trip_id.numeric'       => 'Please give trip id as numaric characters',
            'payment_d.required'  => 'Please give payment id',
            'payment_d.numeric'       => 'Please give payment id as numaric characters',
//            'image.image'     => 'Please give a valid destination image',
        ];
    }
}
