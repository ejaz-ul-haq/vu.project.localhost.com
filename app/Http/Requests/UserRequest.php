<?php

namespace App\Http\Requests;

class UserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|max:255',
            'last_name'  => 'required|max:255',
            'name'       => 'required|max:255',
            'role'       => 'required|max:255',
            'email'      => 'required|max:255',
            'image_url'  => 'nullable|image|mimes:png,jpg,jpeg,gif,webp|max:2048',
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
            'first_name.required' => 'Please give user first name',
            'first_name.max'      => 'Please give user last name maximum of 255 characters',
            'last_name.required'  => 'Please give user last name',
            'last_name.max'       => 'Please give user last name maximum of 255 characters',
            'name.required'       => 'Please give user name',
            'name.max'            => 'Please give user name maximum of 255 characters',
            'role.required'       => 'Please give user role',
            'role.max'            => 'Please give user role maximum of 255 characters',
            'email.required'      => 'Please give user email',
            'email.max'           => 'Please give user email maximum of 255 characters',
            'image.image'         => 'Please give a valid user profile image',
            'image.max'           => 'User image max 2MB is allowed',
        ];
    }
}
