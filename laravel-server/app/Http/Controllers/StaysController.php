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
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $stay = Stay::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'description' => $request->description,
            'date' => $request->date,
            'rate' =>$request->rate,
            'category_id' => $request->category_id,
            'number_of_likes' => 0
        ]);
        // $stay = Stay::create(array_merge(
        //             $validator->validated()

        //         ));
        return response()->json([
            'message' => 'stay successfully added',
            'stay' => $stay
        ], 201);

    }



}