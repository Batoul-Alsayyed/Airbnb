<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Image;
use Validator;

class ImageController extends Controller{
      /**
     * Create a new ProductController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['addImage','getImagesByStayId']]);
    }

    public function getImagesByStayId(Request $request){
        $image = Image::orderBy('created_at','desc')->get();
        $image = Image::where('stay_id', $request->stay_id)->get();

            return response()->json([
                "status" => "Success",
                "image" => $image
            ], 200);

    }
    public function addImage(Request $request){
        $validator = Validator::make($request->all(), [
            'image_link' => 'required|string',
            'stay_id'=> 'required|integer',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $image = Image::create([
            'image_link' => $request->image_link,
            'stay_id' => $request->stay_id,
        ]);
        return response()->json([
            'message' => 'image successfully added',
            'image' => $image
        ], 201);

    }



}