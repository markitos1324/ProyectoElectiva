let express = require('express');
let app = express();

const port = "3000";

const principal = {
    "title": "Ingenieria de sistemas y computación",
    "descripcion": "El programa de Ingeniería de Sistemas y Computación tiene como propósito la formación de profesionales capaces de interactuar con su entorno en el medio social, político y económico. Este ingeniero debe adquirir una preparación en el quehacer científico, tanto en el conocimiento de las ciencias básicas, como en el campo investigativo, para producir conocimiento y aplicarlo en el campo de los sistemas y la computación."
};

const general = {
    "mision": "El programa de Ingeniería de Sistemas y Computación pretende fomentar en el futuro profesional un pensamiento crítico, ético, innovador en lo tecnológico e investigativo, para la construcción y aplicación permanente del conocimiento en las tecnologías informáticas, que den solución a las necesidades de su contexto, contribuyendo al crecimiento social del entorno.",
    "vision": "El programa de Ingeniería de Sistemas y Computación se proyecta como un núcleo de saberes apoyado en una estructura curricular flexible, un cuerpo administrativo idóneo, una infraestructura física actualizada; acorde con los avances tecnológicos del área, y una comunidad académica innovadora, comprometida con la investigación, que permita interactuar con la universalidad de la informática; formando profesionales con pensamiento crítico, ético, humanístico e investigativo. Para cumplir la misión y los objetivos propuestos, el programa contará con docentes altamente calificados, espacios adecuados para la investigación, acceso a redes de comunicación, laboratorios, software y el soporte económico para el mantenimiento y renovación de dichos recursos. Además, se contará con convenios interdisciplinarios e interinstitucionales, nacionales e internacionales.",
    "objetivos":{
        "general": "Formar profesionales íntegros en ingeniería de sistemas y computación, capaces de proveer soluciones enmarcadas en conceptos de calidad a problemas del entorno, aplicando técnicas, métodos y herramientas acordes con los avances de la informática.",
        "especificos": {
            "primero":"Promover la formación humanística, como parte del desarrollo integral del profesional.",
            "segundo":"Formar un profesional con conocimientos en ciencias básicas, técnicas y de profundización de la profesión.",
            "tercero":"Incentivar al estudiante para que analice los diferentes conocimientos y desarrolle su creatividad e innovación, necesarias en la generación de nuevas herramientas o procedimientos para la solución de problemas.",
            "cuarto":"Desarrollar en el estudiante habilidades investigativas, a través de metodologías y técnicas del proceso investigativo."
        }
    }
};

const infelcom = {
    "title": "GRUPO DE INVESTIGACIÓN EN INFORMÁTICA, ELECTRÓNICA Y COMUNICACIONES",
    "descripcion": "El Grupo de Investigación en Informática, Electrónica y Comunicaciones de la Universidad Pedagógica y Tecnológica de Colombia, es una comunidad conformada básicamente por estudiantes y docentes del programa de Ingeniería de Sistemas y Computación, conscientes que el área de la Teleinformática es fundamental para las pretensiones cognitivas y de aplicación profesional y disciplinar. La citada comunidad reconoce su responsabilidad por profundizar y generar soluciones innovadoras en el área de las Redes de Datos, Comunicaciones y actividades de gestión de recursos computacionales dispuestos en una organización tan simple como una empresa y tan compleja como la misma Internet."
};

const gimi = {
    "title": "Grupo Investigación en Manejo de Información",
    "descripcion": "Históricamente el manejo de la información siempre ha sido uno de las temáticas fundamentales de la humanidad, ya que toda cotidianidad exige la clasificación, almacenamiento, búsqueda y transporte de información. Esta información que inicia como dato básico, se va transformado en información para clasificar y cualificar cualquier elemento con el que se relacione los procesos de la humanidad. Las soluciones de la anterior problemática iniciaron por archivos planos, imágenes, documentos en cualquier medio, pasando por las bases de datos como un conjunto de información almacenada. Las bases de datos como una de los esquemas más relevantes de manejo de información estructurada, surgen desde mediados de los años sesenta y han marcado la línea de investigación por muchos años, ahora se encuentran los modelos orientados a objetos."
};

const gis = {
    "title": "GRUPO DE INVESTIGACIÓN EN SOFTWARE",
    "descripcion": "El Grupo de Investigación en Software GIS, fue creado con el propósito de generar un espacio para la investigación de los diferentes tópicos que cubren los nuevos requerimientos tecnológicos que están a la vanguardia del medio actual. Es por esto que se están desarrollando proyectos relacionados con Sistemas Multiagentes, Simulación, Dinámica de Sistemas, captura de señales biomédicas, desarrollo de video juegos y otros importantes aspectos informáticos. Además se busca la publicación y divulgación de los principales hallazgos que realice el grupo en sus diferentes áreas y poder compartir experiencias tanto investigativas como personales en el desarrollo de esta labor."
};

const telematic = {
    "title": "Grupo de Investigación en Telemática y TIC aplicada a la Educación",
    "descripcion": "TelemaTICs Grupo de Investigación en Telemática y TIC aplicada a la educación, desarrolla procesos de investigación e innovación centrados en el uso y aprovechamiento de la tecnología telemática para beneficiar a la sociedad, academia y entorno, fundamentalmente desde el aspecto educacional."
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/principal', function (req, res) {
    res.send(principal);
});

app.get('/general', function (req, res) {
    res.send(general);
});

app.get('/infelcom', function (req, res) {
    res.send(infelcom);
});

app.get('/gimi', function (req, res) {
    res.send(gimi);
});

app.get('/gis', function (req, res) {
    res.send(gis);
});

app.get('/telematic', function (req, res) {
    res.send(telematic);
});

app.listen(port, function () {
    console.log('Server on port ' + port);
});