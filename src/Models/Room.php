<?php

declare(strict_types=1);

namespace TTBooking\SupportChat\Models;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use TTBooking\SupportChat\Contracts\Personifiable;

/**
 * @property int $id
 * @property string|null $subject_type
 * @property int|null $subject_id
 * @property string $name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon|null $deleted_at
 * @property Model|null $subject
 * @property Collection|User[]|Personifiable[] $users
 * @property Collection|Message[] $messages
 */
class Room extends Model
{
    use SoftDeletes;

    protected static function booted(): void
    {
        static::deleting(function (self $room) {
            $room->isForceDeleting()
                ? $room->messages()->forceDelete()
                : $room->messages()->delete();
        });
    }

    public function subject(): MorphTo
    {
        return $this->morphTo();
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }
}
