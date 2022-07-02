<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Stay extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;
  
    protected $fillable = [
        'name',
        'description',
        'price',
        'date',
        'rate',
        'category_id',
        'number_of_likes',
    ];
    
    
    public function getJWTIdentifier() {
        return $this->getKey();
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }    
}