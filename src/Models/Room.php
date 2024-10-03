<?php

declare(strict_types=1);

namespace TTBooking\SupportChat\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use TTBooking\Nanoid\Concerns\HasNanoids;
use TTBooking\SupportChat\Contracts\Personifiable;

/**
 * @property string $id
 * @property string $name
 * @property list<string>|null $tags
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon|null $deleted_at
 * @property Collection<int, Model&Personifiable> $users
 * @property Collection<int, Message> $messages
 */
class Room extends Model
{
    use HasNanoids, SoftDeletes;

    protected int $nanoidSize = 7;

    protected $fillable = ['id', 'name', 'tags'];

    /** @var array<string, string> */
    protected $casts = [
        'tags' => 'array',
    ];

    protected static function booted(): void
    {
        static::deleting(static function (self $room) {
            $room->isForceDeleting()
                ? $room->messages()->forceDelete()
                : $room->messages()->delete();
        });
    }

    /**
     * @return Attribute<string, never>
     */
    protected function name(): Attribute
    {
        return Attribute::get(
            fn (?string $name): string => $name ?? 'Room '.$this->id
        );
    }

    /**
     * @return BelongsToMany<Model&Personifiable>
     */
    public function users(): BelongsToMany
    {
        /** @var class-string<Model> $model */
        $model = config('support-chat.user_model');

        return $this->belongsToMany($model);
    }

    /**
     * @return HasMany<Message>
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class)->orderBy('created_at')->withTrashed();
    }
}
