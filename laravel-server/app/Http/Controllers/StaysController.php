<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Stay;
use Validator;

class StaysController extends Controller{
      /**
     * Create a new ProductController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['addStay','getAllStays','getStayById']]);
    }
    public function getAllStays(){
        $stays = Stay::all();
        
        return response()->json([
            "status" => "Success",
            "stays" => $stays
        ], 200);
    }
    public function getStayById(Request $request){
        $stay = Stay::orderBy('created_at','desc')->get();
        $stay = Stay::where('id', $request->id)->get();

            return response()->json([
                "status" => "Success",
                "stay" => $stay
            ], 200);

    }
    public function addStay(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'description'=> 'required|string',
            'price' => 'required',
            'date' => 'required',
            'rate' =>'required',
            'category_id' =>'required|integer',
            'image_link' =>'required|max:5048',

        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $stay = Stay::create(array_merge(
                    $validator->validated()
                ));
        return response()->json([
            'message' => 'stay successfully added',
            'stay' => $stay
        ], 201);

    }



}