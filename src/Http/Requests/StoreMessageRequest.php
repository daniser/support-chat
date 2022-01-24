<?php

declare(strict_types=1);

namespace TTBooking\SupportChat\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMessageRequest extends FormRequest
{
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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'content' => 'required|string',
            'parent_id' => 'sometimes|nullable|integer',
            'attachments' => 'sometimes|array',
            'attachments.*.name' => 'required|string|max:255',
            'attachments.*.type' => 'required|string|max:255',
            'attachments.*.size' => 'required|integer|min:0',
        ];
    }
}
