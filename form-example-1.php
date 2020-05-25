<html>
  <head>
    <title>Dave's PHP Form Demonstration</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
    .error {color: #FF0000;}
    </style>
  </head>
  <body>
    <?php echo '<h1>Hi! Welcome to my PHP Form Demonstration!</h1><br>'; ?>
    <?php echo '<h4>My name is Dave, would you like to tell me a little bit about yourself?</h4><br>'; ?>

    <?php
    //define variables and set to empty values
    $nameErr = $emailErr = $genderErr = $websiteErr - " ";
    $name = $email = $gender = $comment = $website = " ";

    if ($_SERVER["REQUEST_METHOD"]  == "POST") {
      if (empty($_POST["name"])) {
        $nameErr = "Name is required";
      } else {
        $name = test_input ($_POST["name"]);
        //check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
          $name_Err = "Only letters and white space are allowed";
        }
      }

      if (empty($_POST["email"])) {
        $emailErr = "Email is required";
      } else {
        $email = test_input($_POST["email"]);
        //check if e-mail address is in valid format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }

      if (empty($_POST["website"])) {
        $website = " ";
      } else {
        $website = test_input($_POST["website"]);
        //check if URL address syntax is valid (this regular expression also allows dashes in the URL)
        if (!preg_match("/\b(?:(?:https?|ftp) :\/\/|www\.) [-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website))
        {
          $websiteErr = "Invalid URL";
        }
      }

      if (empty($_POST["comment"])) {
        $comment = " ";
      } else {
        $comment = test_input($_POST["comment"]);
      }

      if (empty($_POST["gender"])) {
        $genderErr = "Gender is required";
      } else {
        $gender = test_input(S_POST["gender"]);
      }
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    ?>

    <p><span class="error">* required field</span></p>
    <form method="post" action="<?php echo
    htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      Name: <input type="text" name="name" value="<?php echo $name;?>">
      <span class="error">* <?php echo $nameErr;?></span>
      <br><br>
      Email: <input type="text" name="email" value="<?php echo $email;?>">
      <span class="error">* <?php echo $emailErr;?></span>
      <br><br>
      Website: <input type="text" name="website" value="<?php echo $website;?>">
      <span class="error"><?php echo $websiteErr;?></span>
      <br><br>

      Tell me your thoughts:<br>
      <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
      <br><br>

      What is your Gender?<br>
      <input type="radio" name="gender"
      <?php if (isset($gender) && $gender=="female") echo "checked";?>
      value="female">Female
      <input type="radio" name="gender"
      <?php if (isset ($gender) && $gender=="male") echo "checked";?>
      value="male">Male
      <input type="radio" name="gender"
      <?php if (isset($gender) &&
      $gender=="other") echo "checked";?>
      value="other">Other
      <span class="error">* <?php echo $genderErr;?></span>
      <br><br>
      <input type="submit" class="btn btn-success"></input>
      <input type="reset" class="btn btn-warning"></input>
      <input type="button" onclick="alert('D'oh! I told you not to press it!')" class="btn btn-danger" value="Do Not Press This Button! DON'T DO IT!!!"></input>
    </form>

    <?php
    echo "<h2>Your Input:</h2>";
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $website;
    echo "<br>";
    echo $comment;
    echo "<br>";
    echo $gender;
    ?>
    <br>

  </body>
</html>
