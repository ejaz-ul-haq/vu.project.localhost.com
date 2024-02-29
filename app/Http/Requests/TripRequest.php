<?php

namespace App\Http\Requests;

class TripRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'accommodation_id' => 'required|numeric',
            'destination_id'   => 'required|numeric',
            'start_date_time'  => 'required|date_format:Y-m-d H:i:s',
            'end_date_time'    => 'required|date_format:Y-m-d H:i:s',
//            'travel_mates'     => 'required|array',
//            'travel_mates.*'   => 'integer',
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
            'accommodation_id.required'   => 'Please give accommodation id',
            'accommodation_id.numeric'    => 'Please make sure accommodation id is numeric',
            'destination_id.required'     => 'Please give destination id',
            'destination_id.numeric'      => 'Please make sure destination id is numeric',
            'start_date_time.required'    => 'Please give trip start date',
            'start_date_time.date_format' => 'Please make sure start date is formatted as Y-m-d H:i:s',
            'end_date_time.required'      => 'Please give trip end date',
            'end_date_time.date_format'   => 'Please make sure end date is formatted as Y-m-d H:i:s',
            'travel_mates.required'       => 'Please give travel mates ids',
            'travel_mates.numeric'        => 'Please make sure travel mates IDs array is provided',
        ];
    }
}
