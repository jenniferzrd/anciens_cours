var test = (function test() {

    var arrondissements,
        createChart,
        ctx,
        filtrer,
        getData;

    arrondissements = {
        75001: 0,
        75002: 0,
        75003: 0,
        75004: 0,
        75005: 0,
        75006: 0,
        75007: 0,
        75008: 0,
        75009: 0,
        75010: 0,
        75011: 0,
        75012: 0,
        75013: 0,
        75014: 0,
        75015: 0,
        75016: 0,
        75017: 0,
        75018: 0,
        75019: 0,
        75020: 0
    };

    window.onload = function start() {
        ctx = document.getElementById("myChart").getContext('2d');
        getData();
    };

    createChart = function createChart(data) {
        var config = {
            labels: [
                "Paris 1",
                "Paris 2",
                "Paris 3",
                "Paris 4",
                "Paris 5",
                "Paris 6",
                "Paris 7",
                "Paris 8",
                "Paris 9",
                "Paris 10",
                "Paris 11",
                "Paris 12",
                "Paris 13",
                "Paris 14",
                "Paris 15",
                "Paris 16",
                "Paris 17",
                "Paris 18",
                "Paris 19",
                "Paris 20"
            ],
            datasets: [
                {
                    label: "Répartition, des graffitis de paris",
                    backgroundColor: "silver",
                    borderColor: "cadetblue",
                    borderWidth: 1,
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "orange",
                    pointHoverBackgroundColor: "firebrick",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [
                        arrondissements[75001],
                        arrondissements[75002],
                        arrondissements[75003],
                        arrondissements[75004],
                        arrondissements[75005],
                        arrondissements[75006],
                        arrondissements[75007],
                        arrondissements[75008],
                        arrondissements[75009],
                        arrondissements[75010],
                        arrondissements[75010],
                        arrondissements[75011],
                        arrondissements[75012],
                        arrondissements[75013],
                        arrondissements[75014],
                        arrondissements[75015],
                        arrondissements[75016],
                        arrondissements[75017],
                        arrondissements[75018],
                        arrondissements[75019],
                        arrondissements[75020]
                    ]
                }
            ]
        };

        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: config
        });
        // log(config);
        // log(myRadarChart);
    };

    filtrer = function filtrer(graffs) {
        graffs.forEach(function parcourir(graff) {
            if (isFinite(arrondissements[graff.fields.code_postal])) {
                arrondissements[graff.fields.code_postal] += 1;
            }
        });
        // log(arrondissements);
    };

    getData = function getData() {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open("get", "graffitis.json");
        xhr.onload = function getResponse(e) {
            // log(this.response);
            var res = JSON.parse(this.response);
            log(res);
            filtrer(res.records);
            createChart(res.records);
        };
        xhr.send(null);
    };

}());
