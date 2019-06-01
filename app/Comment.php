<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    /**
     * Mass assignable attributes
     *
     * @var array
     */
    protected $fillable = [
      'photo_id',
      'text',
      'title',
      'pubDate'
    ];

    public function photo()
    {
        return $this->belongsTo('App/Photo');
    }
}
