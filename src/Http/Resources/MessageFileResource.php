<?php

declare(strict_types=1);

namespace TTBooking\SupportChat\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use TTBooking\SupportChat\Models\MessageFile;

/**
 * @mixin MessageFile
 */
class MessageFileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'name' => pathinfo($this->name, PATHINFO_FILENAME),
            'type' => pathinfo($this->name, PATHINFO_EXTENSION),
            'size' => $this->size,
            'audio' => $this->audio,
            'duration' => $this->duration,
            'url' => route('messages.attachments.show', ['message' => $this->message_id, 'attachment' => $this->name]),
            'preview' => $this->preview ? 'data:image/png;base64,'.base64_encode($this->preview) : null,
            'progress' => Storage::exists($this->attachmentPath) ? -1 : 0,
        ];
    }
}
