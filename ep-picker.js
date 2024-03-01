document.addEventListener('DOMContentLoaded', function() {
    const dataset = [
        { src: 'img/E01/screenshot_S01E01_20240228-172352.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-172631.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-172722.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-172840.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173011.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173152.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173304.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173358.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173529.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173703.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173803.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173858.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-173931.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174047.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174154.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174327.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174413.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174501.png', seasonEpisode: 'S01E01' },
        { src: 'img/E01/screenshot_S01E01_20240228-174546.png', seasonEpisode: 'S01E01' },

        { src: 'img/E02/screenshot_S01E02_20240228-174900.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175046.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175311.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175503.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175539.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175724.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175916.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-175956.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180036.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180211.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180257.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180411.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180514.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180636.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180812.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-180847.png', seasonEpisode: 'S01E02' },
        { src: 'img/E02/screenshot_S01E02_20240228-181033.png', seasonEpisode: 'S01E02' },

        { src: 'img/E03/screenshot_S01E03_20240228-181226.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181408.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181541.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181645.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181737.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181852.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-181935.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182103.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182254.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182445.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182547.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182731.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182909.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-182956.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-183029.png', seasonEpisode: 'S01E03' },
        { src: 'img/E03/screenshot_S01E03_20240228-183125.png', seasonEpisode: 'S01E03' },

        { src: 'img/E04/screenshot_S01E04_20240228-183630.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-183750.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-183901.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184050.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184251.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184436.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184549.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184730.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184805.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184844.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-184938.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185136.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185319.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185439.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185533.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185616.png', seasonEpisode: 'S01E04' },
        { src: 'img/E04/screenshot_S01E04_20240228-185658.png', seasonEpisode: 'S01E04' },

        { src: 'img/E05/screenshot_S01E05_20240229-021458.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-021604.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-021729.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-021924.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022106.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022213.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022348.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022504.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022545.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022656.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022801.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-022834.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-023009.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-023200.png', seasonEpisode: 'S01E05' },
        { src: 'img/E05/screenshot_S01E05_20240229-023313.png', seasonEpisode: 'S01E05' },

        { src: 'img/E06/screenshot_S01E06_20240229-023730.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-023849.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024006.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024135.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024246.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024323.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024508.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024649.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024826.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-024905.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025026.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025201.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025338.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025442.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025514.png', seasonEpisode: 'S01E06' },
        { src: 'img/E06/screenshot_S01E06_20240229-025601.png', seasonEpisode: 'S01E06' },

        { src: 'img/E07/screenshot_S01E07_20240229-030048.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-030253.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-030358.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-030415.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-030833.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-030936.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031045.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031145.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031323.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031402.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031442.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031635.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031733.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-031840.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-032006.png', seasonEpisode: 'S01E07' },
        { src: 'img/E07/screenshot_S01E07_20240229-032117.png', seasonEpisode: 'S01E07' },

        { src: 'img/E08/screenshot_S01E08_20240229-032619.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-032740.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-032928.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033059.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033233.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033341.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033518.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033627.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033723.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-033910.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-034054.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-034206.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-034315.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-034420.png', seasonEpisode: 'S01E08' },
        { src: 'img/E08/screenshot_S01E08_20240229-034512.png', seasonEpisode: 'S01E08' },

        { src: 'img/E09/screenshot_S01E09_20240229-163752.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-163825.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-163903.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-163934.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164032.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164044.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164108.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164128.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164139.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164232.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164328.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164440.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164541.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164614.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164650.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164714.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164748.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164909.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-164952.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165103.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165225.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165311.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165358.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165420.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165533.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165643.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165709.png', seasonEpisode: 'S01E09' },
        { src: 'img/E09/screenshot_S01E09_20240229-165735.png', seasonEpisode: 'S01E09' },

        { src: 'img/E10/screenshot_S01E10_20240229-170030.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170047.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170214.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170255.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170310.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170417.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170540.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170611.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170722.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170803.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170824.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170907.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-170923.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171027.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171153.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171233.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171322.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171338.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171440.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171703.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171756.png', seasonEpisode: 'S01E10' },
        { src: 'img/E10/screenshot_S01E10_20240229-171816.png', seasonEpisode: 'S01E10' },

        { src: 'img/E11/screenshot_S01E11_20240229-172223.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172310.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172404.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172419.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172535.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172617.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172814.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-172921.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173034.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173141.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173203.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173327.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173405.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173509.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173535.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173621.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173715.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173834.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-173926.png', seasonEpisode: 'S01E11' },
        { src: 'img/E11/screenshot_S01E11_20240229-174051.png', seasonEpisode: 'S01E11' },

        { src: 'img/E12/screenshot_S01E12_20240229-181137.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181203.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181407.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181417.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181547.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181557.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181734.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181824.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181843.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-181930.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182009.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182107.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182158.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182223.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182327.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182457.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182617.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182648.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182810.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182906.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182919.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-182952.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-183033.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-183110.png', seasonEpisode: 'S01E12' },
        { src: 'img/E12/screenshot_S01E12_20240229-183154.png', seasonEpisode: 'S01E12' },
        // Add more images and their season/episode numbers here
    ];

    let score = 0;
    let highScore = 0;
    let lastShownImages = []; // Array to keep track of the last shown images

    function selectAndDisplayImage() {
        let selectedImage;
        let attempts = 0; // Prevent infinite loops
        do {
            selectedImage = dataset[Math.floor(Math.random() * dataset.length)];
            attempts++;
        } while (lastShownImages.includes(selectedImage.src) && attempts < 100);

        // Update the last shown images array
        lastShownImages.push(selectedImage.src);
        if (lastShownImages.length > 10) {
            lastShownImages.shift(); // Ensure we only track the last 10 images
        }

        document.getElementById('showImage').src = selectedImage.src;
        document.getElementById('showImage').setAttribute('data-current-selection', selectedImage.seasonEpisode);
        document.getElementById('episodeGuess').value = ""; // Reset the select menu to its placeholder value
    }

    function updateScore(isCorrect, currentSelection) {
        if (isCorrect) {
            score += 1;
            if (score > highScore) {
                highScore = score;
            }
        } else {
            score = 0; // Reset score to 0 if the guess is wrong
            // Show the correct answer when the guess is wrong
            document.getElementById('result').textContent += ` The correct answer was ${currentSelection}.`;
        }
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('highScore').textContent = `High Score: ${highScore}`;
    }

    selectAndDisplayImage(); // Initial image selection

    document.getElementById('submitGuess').addEventListener('click', function() {
        const episodeGuessSelect = document.getElementById('episodeGuess');
        const userGuess = episodeGuessSelect.value;
        
        if (episodeGuessSelect.selectedIndex === 0) {
            alert('Please select an episode before guessing.');
            return;
        }

        const currentSelection = document.getElementById('showImage').getAttribute('data-current-selection');
        const isCorrect = userGuess === currentSelection;
        document.getElementById('result').textContent = isCorrect ? 'Correct!' : 'Wrong, try again!';
        
        updateScore(isCorrect, currentSelection);
        selectAndDisplayImage(); // Select and display a new image
    });
});