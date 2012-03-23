(function ($) {
  $.fn.extend({
    formsetHelpers: function () {
      return this.each(function () {
        var obj = $(this);

        function check_more_than_one(element) {
          // Check if the element is the last one
          if ($(element).parent().children("input").length > 1)
            return true;
          return false;
        }

        function remove_input(element) {
          // Hide the element and remove it
          if (check_more_than_one(element))
            $(element).fadeOut(function callback() {
              $(element).remove();
            });
        }

        function add_input(element) {
          // Append one input to the parent div
          base_name = $(element).attr("id").split("-")[0];
          $(element).parent().append('<input style="display: none" id="' + base_name +
                                     '" name="' + base_name + '" type="text">');
          input = $(element).parent().children("input:last-child");
          input.fadeIn();
          assignEvents(input); // Assign event to thew new input
        }

        function reindex() {
          // Create autoenumerate index for all the inputs inside the container
          base_identifier = obj.children("input:first").attr("id").split("-")[0];
          index = 0;
          obj.children("input").each(function assignNewIndex() {
            $(this).attr("id", base_identifier + "-" + index);
            $(this).attr("name", base_identifier + "-" + index);
            index++;
          });
        }

        function assignEvents(element) {
          // Remove input if empty
          $(element).change(function onChange() {
            if (!$(this).val())
              remove_input($(this));
            });

          // Add input if is needed
          $(element).bind("keypress change", function addIfNeeded() {
            if ($(this).parent().children("input:last-child").val()) //The last one should be non-empty
              add_input($(this));
          });

          // Remove empty fields (the last ones) and reindex all the elements
          $(element).parents("form").submit(function clearEmptyBeforeSubmit() {
            obj.children("input").each(function removeIfEmpty() {
              if (!$(this).val())
                $(this).remove();
            });
            reindex();
          });
        }

        // First time events
        obj.children("input").each(function assignAllEvent() {
          assignEvents($(this));
        });

        // Add extra input only if the first is not empty.
        obj.children("input:last-child").each(function addExtraInput() {
          if ($(this).parent().children("input:first").val())
            add_input($(this));
        });

      }); //Close jQuery plugin
    }
  });
})(jQuery);
