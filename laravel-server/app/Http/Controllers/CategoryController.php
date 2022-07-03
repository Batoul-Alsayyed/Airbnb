<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Category;
use Validator;

class CategoryController extends Controller{
      /**
     * Create a new ProductController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['addCategory','getAllCategories','getCategoryById']]);
    }
    public function getAllCategories(){
        $categories = Category::all();
        
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
    public function getCategoryById(Request $request){
        $category = Category::orderBy('created_at','desc')->get();
        $category = Category::where('id', $request->id)->get();

            return response()->json([
                "status" => "Success",
                "category" => $category
            ], 200);

    }
    public function addCategory(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',

        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $category = Category::create(array_merge(
                    $validator->validated()
                ));
        return response()->json([
            'message' => 'category successfully added',
            'category' => $category
        ], 201);

    }



}