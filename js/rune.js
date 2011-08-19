
var debug = true;


function build_fehu() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");
	// line from the top to bottom of fehu
	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;

        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);
		
	// top line that goes at a diaginal of fehu	
        stage_context.moveTo(canvas_center + 50, 10);
        stage_context.lineTo(canvas_center, line_quarter * 2);

        stage_context.moveTo(canvas_center + 50, 10 + line_quarter);
        stage_context.lineTo(canvas_center, line_quarter * 3);

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_uruz() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");
	// line from the top to bottom of uruz 
	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;
		
	// longest line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// second line 3/4 the height 
        stage_context.moveTo(canvas_center + 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length);
	
	// line to connect the two 
        stage_context.moveTo(canvas_center - 30, 10);
       	stage_context.lineTo(canvas_center + 30, line_quarter);
		

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_thurisaz() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;

	// left line 
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// uppper triangle
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// lower triangle 
        stage_context.moveTo(canvas_center - 30, line_length - line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_ansuz() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

	var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top down stroke
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 25, line_quarter + 10);

	// bottom (parallel to the top) stroke
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 25, line_quarter * 2);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_nauthez() {
	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line down the center
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// diaginal line through the center
	stage_context.moveTo(canvas_center - 30, line_quarter + 20);
	stage_context.lineTo(canvas_center + 30, line_quarter * 2 + 30);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_kenaz() {
	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// < top
	stage_context.moveTo(canvas_center, 20);
        stage_context.lineTo(canvas_center - 50, line_length / 2);
		
	// < bottom
	stage_context.moveTo(canvas_center, line_length - 15);
        stage_context.lineTo(canvas_center - 50, line_length / 2);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_isa() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_raidho() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top part of the R
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// bottom part of the R 

	// right leg 

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function setup_stage(stage_id) {
	
        var stage = document.getElementById(stage_id);
	// reset the canvas to nothing 
	//stage.width = stage.width;
        if (window.console && debug) {
                        console.log(stage);
        }

	if (stage.getContext) {
		return stage;
	}

}

/* draw_line - 	take a canvas object, set the shadow and draw the lines.
		Broke this into it's own function to save on duplication of
		code, and to save on the 10k zipped :) 
*/
function draw_line(canvas) {

		canvas.shadowOffsetX = 4;
		canvas.shadowOffsetY = 4;
		canvas.shadowBlur = 5;
		canvas.shadowColor = "#000";
                canvas.strokeStyle = "#000";
		canvas.lineWidth = 5;
		canvas.lineCap = "round";
                canvas.stroke();

}



$(window).resize(function() {	
	build_kenaz();
	build_nauthez();
	build_ansuz();
	build_uruz();
	build_isa();	
});

$(document).ready(function() {

        if (window.console && debug) {
                        console.log("your document is ready....");
        }


	build_kenaz();
	build_nauthez();
	build_ansuz();
	build_uruz();
	build_isa();	
});
