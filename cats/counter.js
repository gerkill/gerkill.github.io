
/*$(document).ready(function() {

  $('#kitty').onfocus(function() {

  var count;

    if (count == undefined || count == "" || count == 0) {
    var count = 0;
    }

    count++;
    $('#counter1').html("Image Views: " + count);
  }
});*/

    $('#counter1').data('count', 0);
    $('#kitty').click(function() {
        $('#counter1').html(function() {
            var $this = $(this),
                count = $this.data('count') + 1;
            $this.data('count', count);
            return count;
        });
    });
   $('#counter2').data('count', 0);
    $('#katty').click(function() {
        $('#counter2').html(function() {
            var $this = $(this),
                count = $this.data('count') + 1;
            $this.data('count', count);
            return count;
        });
    });
    $('#counter3').data('count', 0);
    $('#yowler').click(function() {
        $('#counter3').html(function() {
            var $this = $(this),
                count = $this.data('count') + 1;
            $this.data('count', count);
            return count;
        });
    });
    $('#counter4').data('count', 0);
    $('#smirker').click(function() {
        $('#counter4').html(function() {
            var $this = $(this),
                count = $this.data('count') + 1;
            $this.data('count', count);
            return count;
        });
    });
    $('#counter5').data('count', 0);
    $('#snatcher').click(function() {
        $('#counter5').html(function() {
            var $this = $(this),
                count = $this.data('count') + 1;
            $this.data('count', count);
            return count;
        });
    });
