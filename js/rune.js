
var debug = true;


/*
	build_fehu:
			build the fehu rune on the canvas that is passed. If none
			is given the the default (fehu_canvas) is used.	
		
	Inputs:
		canvas: the canvas you want to draw fehu on 
*/
function build_fehu(canvas) {

	if (canvas == null) {
		canvas = 'fehu_canvas';
	}

	stage = setup_stage(canvas);

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

function build_uruz(canvas) {
	
	if (canvas == null) {
		canvas = 'uruz_canvas';
	}

	stage = setup_stage(canvas);

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

function build_thurisaz(canvas) {

	if (canvas == null) {
		canvas = 'thurisaz_canvas';
	}

	stage = setup_stage(canvas);

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

function build_ansuz(canvas) {

	if (canvas == null) {
		canvas = 'ansuz_canvas';
	}

	stage = setup_stage(canvas);

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

function build_naudhiz(canvas) {

	if (canvas == null) {
		canvas = 'naudhiz_canvas';
	}

	stage = setup_stage(canvas);

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

function build_kenaz(canvas) {

	if (canvas == null) {
		canvas = 'kenaz_canvas';
	}

	stage = setup_stage(canvas);

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

function build_isa(canvas) {

	if (canvas == null) {
		canvas = 'isa_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_gebo(canvas) {

	if (canvas == null) {
		canvas = 'gebo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_wunjo(canvas) {

	if (canvas == null) {
		canvas = 'wunjo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;
	
	// long left line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top part of upper triangle  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter);

	// bottom part of upper triangle 
        stage_context.moveTo(canvas_center + 30, line_quarter);
        stage_context.lineTo(canvas_center, line_length / 2);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_hagalaz(canvas) {

	if (canvas == null) {
		canvas = 'hagalaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// right line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// diaginal line through the two parallel lines  
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length - line_quarter);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_jera(canvas) {

	if (canvas == null) {
		canvas = 'jera_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// lower left less then sign upper line
        stage_context.moveTo(canvas_center, line_quarter + 20);
        stage_context.lineTo(canvas_center - 40, line_quarter * 3 );

	// lower left less then sign lower line
        stage_context.moveTo(canvas_center - 40, line_quarter * 3);
        stage_context.lineTo(canvas_center, line_length);

	// upper right greater then sign upper line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 40, line_quarter + 20);

	// upper right greater then sign lower line
        stage_context.moveTo(canvas_center + 40, line_quarter + 20);
        stage_context.lineTo(canvas_center, line_quarter * 3);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_othala(canvas) {
	
	if (canvas == null) {
		canvas = 'othala_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top left  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// top right 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_dagaz(canvas) {

	if (canvas == null) {
		canvas = 'dagaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 15);
        stage_context.lineTo(canvas_center + 30, line_length - 5);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 15);
        stage_context.lineTo(canvas_center - 30, line_length - 5);

	// outer left line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// outer right line 
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_ingwaz(canvas) {

	if (canvas == null) {
		canvas = 'ingwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// top left part of square
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 2);

	// top right part of square
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter * 2);

	// bottom right part of square
        stage_context.moveTo(canvas_center - 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_length);

	// bottom left part of square
        stage_context.moveTo(canvas_center + 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_laguz(canvas) {
	
	if (canvas == null) {
		canvas = 'laguz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top right line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_mannaz(canvas) {

	if (canvas == null) {
		canvas = 'mannaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length / 2);

	// left line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_ehwaz(canvas) {

	if (canvas == null) {
		canvas = 'ehwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left top
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_length / 2);

	// right top
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center, line_length / 2);

	// left line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_berkano(canvas) {

	if (canvas == null) {
		canvas = 'berkano_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// upper bump top
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_quarter + 10);

	// upper bump bottom 
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 2);

	// lower bump top
        stage_context.moveTo(canvas_center - 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_quarter * 3);

	// lower bump bottom 
        stage_context.moveTo(canvas_center, line_quarter * 3);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_tiwaz(canvas) {

	if (canvas == null) {
		canvas = 'tiwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line in the center 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top left line  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// top right line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_sowilo(canvas) {

	if (canvas == null) {
		canvas = 'sowilo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// 1st top line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// 2nd top line
        stage_context.moveTo(canvas_center - 30, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_quarter * 2 + 10);

	// 3rd top line
        stage_context.moveTo(canvas_center + 30, line_quarter * 2 + 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 3 + 10);



	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_elhaz(canvas) {

	if (canvas == null) {
		canvas = 'elhaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line down the center 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// left top  
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, 10);

	// right top  
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_perthro(canvas) {

	if (canvas == null) {
		canvas = 'perthro_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line to the left
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top left
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_quarter + 10);

	// top right 
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, 10);

	// bottom left
        stage_context.moveTo(canvas_center - 30, line_length);
        stage_context.lineTo(canvas_center, line_length - line_quarter);

	// bottom right 
        stage_context.moveTo(canvas_center, line_length - line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_eihwaz(canvas) {

	if (canvas == null) {
		canvas = 'eihwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// bottom line 
        stage_context.moveTo(canvas_center, line_length);
        stage_context.lineTo(canvas_center + 30, line_length - line_quarter);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_raidho(canvas) {

	if (canvas == null) {
		canvas = 'raidho_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top part of the R
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);

	// bottom part of the R 
	stage_context.moveTo(canvas_center + 30, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_length / 2);

	// right leg 
	stage_context.moveTo(canvas_center - 30, line_length / 2);
        stage_context.lineTo(canvas_center + 30, line_length - 5);

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
	build_eihwaz();
});

$(document).ready(function() {

        if (window.console && debug) {
                        console.log("your document is ready....");
        }

	/* button setup */
	build_fehu('fehu_button');
	build_uruz('uruz_button');
	build_thurisaz('thurisaz_button');
	build_ansuz('ansuz_button');
	build_raidho('raidho_button');
	build_kenaz('kenaz_button');
	build_gebo('gebo_button');
	build_wunjo('wunjo_button');
	build_hagalaz('hagalaz_button');
	build_naudhiz('naudhiz_button');
	build_isa('isa_button');
	build_jera('jera_button');
	build_eihwaz('eihwaz_button');
	build_perthro('perthro_button');
	build_elhaz('elhaz_button');
	build_sowilo('sowilo_button');
	build_tiwaz('tiwaz_button');
	build_berkano('berkano_button');
	build_ehwaz('ehwaz_button');
	build_mannaz('mannaz_button');
	build_laguz('laguz_button');
	build_ingwaz('ingwaz_button');
	build_dagaz('dagaz_button');
	build_othala('othala_button');
});	
