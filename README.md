jQuery WTForms formsets
=======================

Overview
--------

When you are working with formsets and WTForm the first time that you render
the template you can show X forms but, of course (it's server side) don't
update this number.

To update this number some tricky javascript is needed. This script will
help you to forget about this JS code.

Usage
-----

    $(document).ready(function (){
      $(".controls").formsetHelpers();
    });

When the document is ready we say to the plugin which is the container that
has our inputs.

In this case I'm using twitter bootstrap and all the inputs on the form are
between:

    <div class="controls">
      <input id="fancy_input-0" name="fancy_input-0" type="text" />
      ...
    </div>

So, for me the div will be always this, but of course, you can use wathever
you want.

TODO
----

- We are not using max\_entries at all, so the forms could be infinite. If
  somebody needs this functionality I will be glad of add it.
