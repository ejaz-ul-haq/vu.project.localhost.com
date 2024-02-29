<?php

namespace App\Http\Requests;

class DestinationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'title'       => 'required|max:255',
            'description' => 'nullable|max:5000',
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
            'title.required'  => 'Please give destination title',
            'title.max'       => 'Please give destination title maximum of 255 characters',
            'description.max' => 'Please give destination description maximum of 5000 characters',
//            'image.image'     => 'Please give a valid destination image',
        ];
    }
}
