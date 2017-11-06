<?php
    include("inc/header.php");
    $_SESSION["current_id_lieu"] = $_GET["id"];
    $lieu = readLieu($_GET["id"]);
?>
    <body class="page-edit">
        <a href="index.php" title="Retour à l'accueil" class="fa fa-home"></a>
        <h1 class="title">Editer ce lieu</h1>
        <p class="text">
            Inclure une google map avec l'api JS<br>
            Ecouter les clicks sur la map<br>
            insérer/updater un marqueur sous la zone cliquée<br>
            Mettre à jour les inputs lati/long<br>
        </p>
        <div class="row">
            <form action="api.php" method="post" class="form edit">
                <input class="input" type="text" id="adresse" name="adresse" value="<?php echo $lieu->adresse; ?>">
                <input class="input" type="text" id="cp" name="cp" value="<?php echo $lieu->cp; ?>">
                <input class="input" type="text" id="ville" name="ville" value="<?php echo $lieu->ville; ?>">
                <input class="input" type="number" id="lati" name="lati" step="any" placeholder="latitude" value="<?php echo $lieu->lati; ?>">
                <input class="input" type="number" id="long" name="long" step="any" placeholder="longitude" value="<?php echo $lieu->longi;?>">
                <input id="update_lieu" type="submit" name="update_lieu">
            </form>
            <input type="text" id="search_map" class="input search">
            <div id="map" class="map">
                <i id="loader" class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            </div>
        </div>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJZf5O7E-N0Qk1x23o6OT6qGpnT0SJarU&libraries=places&callback=mapsWidget"></script>
    </body>
</html>
