<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>js session 1</title>
    <script>
        console.log('hello world !!!');

        function displayTextBox() {
            window.alert("ola people !!!");
        }
        function direBonjour(aQui) {
            window.alert("Bonjour" + aQui);
        }
        function surUneLigne(mess1, mess2) {
            console.log(mess1 + " " + mess2);
        }
        direBonjour("Maman");
        direBonjour("Patron");
        surUneLigne("C'est une belle journée",
        "Pour s'exercer à js!");
        surUneLigne("coucou", "ça va ?");

    </script>
    <style>
        body {
            background: cadetblue;
        }
    </style>
</head>
<body>

</body>
</html>
