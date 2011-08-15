
var debug = true;


function build_fehu() {

        var stage = document.getElementById('fehu_canvas');
        if (window.console && debug) {
                        console.log(stage);
        }

        if (stage.getContext) {
                var stage_context = stage.getContext("2d");
		// line from the top to bottom of fehu
		var line_length = stage.height - 10;
		var canvas_center = stage.width / 2;
		var line_quarter = line_length / 4;
		console.log(line_length);
                stage_context.moveTo(canvas_center, 10);
                stage_context.lineTo(canvas_center, line_length);
		
		// top line that goes at a diaginal of fehu	
                stage_context.moveTo(canvas_center + 50, 10);
                stage_context.lineTo(canvas_center, line_quarter * 2);

                stage_context.moveTo(canvas_center + 50, 10 + line_quarter);
                stage_context.lineTo(canvas_center, line_quarter * 3);

		// filling in the ink to the stroke
		stage_context.shadowOffsetX = 4;
		stage_context.shadowOffsetY = 4;
		stage_context.shadowBlur = 5;
		stage_context.shadowColor = "#000";
                stage_context.strokeStyle = "#000";
		stage_context.lineWidth = 5;
		stage_context.lineCap = "round";
                stage_context.stroke();
                //stage_context.lineTo(25, 105);
                //stage_context.fill();
        }
}

function build_uruz() {

	stage = setup_stage('fehu_canvas');

        var stage_context = stage.getContext("2d");
	// line from the top to bottom of fehu
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

function setup_stage(stage_id) {
	
        var stage = document.getElementById(stage_id);
	// reset the canvas to nothing 
	stage.width = stage.width;
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
	build_uruz();
});

$(document).ready(function() {

        if (window.console && debug) {
                        console.log("your document is ready....");
        }


	build_uruz();
});
