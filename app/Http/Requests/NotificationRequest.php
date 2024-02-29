<?php

namespace App\Http\Requests;

class NotificationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'subject' => 'required|max:255',
            'body'    => 'nullable|max:5000',
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
            'subject.required' => 'Please give notification subject',
            'subject.max'      => 'Please give notification subject maximum of 255 characters',
            'body.max'         => 'Please give notification body content maximum of 5000 characters',
//            'image.image'     => 'Please give a valid destination image',
        ];
    }
}
