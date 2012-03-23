jQuery WTForms formsets
=======================

Overview
--------

When you are working with formsets and WTForm the first time that you render
the template you can show X forms but, of course, it's server side.

You can update this number on-the-fly but some tricky javascript is needed.
This plugin will help you to forget about this JS code.

Usage
-----

In the folder examples you can see one example that loads the plugin with this:

    $(document).ready(function (){
      $(".inputs, .more-stuff").formsetHelpers();
    });

When the document is ready we say to the plugin which is the container that
has our inputs. In this case we have two classes: `input` & `more-stuff`.

The code inside the form should be something like this:

    <div class="inputs">
      <input type="text" id="test_formset-0" name="test_formset-0" value="Input 1"/>
      <input type="text" id="test_formset-1" name="test_formset-1" value="Input 2"/>
    </div>
    <div class="more-stuff">
      <input type="text" id="more_stuff-0" name="more_stuff-0" value="This is extra"/>
      <input type="text" id="more_stuff-1" name="more_stuff-1" value="stuff"/>
    </div>

The plugin will iterate over `.inputs` and `.more-stuff` and generate a new input
field to allow your user to use it. If you remove some of the contents this field
will be removed (if it is not the last one.

TODO
----

- We are not using max\_entries at all, so the forms could be infinite. If
  somebody needs this functionality I will be glad of add it.
- Only works with `<input/>` fields and not with `<select/>`, for example.
- More html structures should be allowed, like a table.
