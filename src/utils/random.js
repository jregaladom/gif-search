const random = {};


const randomText = () => {
    const words = ["perro", "gato", "ratón", "elefante", "jirafa", "tigre",
        "rojo", "azul", "verde", "amarillo", "naranja", "morado",
        "sol", "luna", "estrella", "cielo", "nube", "rayo",
        "manzana", "banana", "naranja", "uva", "fresa", "sandía",
        "montaña", "océano", "río", "playa", "bosque", "desierto",
        "ordenador", "teclado", "ratón", "pantalla", "software", "hardware",
        "familia", "amigo", "amor", "vida", "felicidad", "éxito",
        "pintura", "escultura", "música", "literatura", "cine", "teatro",
        "coche", "bicicleta", "avión", "barco", "tren", "autobús",
        "mesa", "silla", "sofá", "cama", "armario", "espejo",
        "hamburguesa", "pizza", "ensalada", "frutas", "helado", "pastel",
        "baile", "canto", "dibujo", "escritura", "deporte", "juego",
        "alegría", "tristeza", "miedo", "enojo", "sorpresa", "calma",
        "verano", "invierno", "primavera", "otoño", "solsticio", "equinoccio",
        "volar", "correr", "nadar", "saltar", "bailar", "cantar",
        "feliz", "triste", "enojado", "asustado", "sorprendido", "relajado",
        "computadora", "teléfono", "cámara", "altavoz", "auriculares", "micrófono",
        "fotografía", "pintura", "escultura", "poesía", "novela", "cuento",
        "madera", "metal", "plástico", "vidrio", "papel", "tela",
        "doctor", "enfermero", "maestro", "estudiante", "ingeniero", "científico",
        "solución", "problema", "pregunta", "respuesta", "idea", "concepto",
        "río", "montaña", "océano", "selva", "desierto", "llanura",
        "ciudad", "pueblo", "aldea", "calle", "avenida", "plaza",
        "fuego", "agua", "aire", "tierra", "éter", "energía",
        "arte", "ciencia", "filosofía", "religión", "historia", "geografía",
        "amor", "odio", "paz", "guerra", "justicia", "injusticia",
        "verdad", "mentira", "realidad", "sueño", "esperanza", "desesperación",
        "viaje", "destino", "origen", "camino", "mapa", "brújula",
        "número", "letra", "símbolo", "significado", "gramática", "vocabulario",
        "piedra", "madera", "metal", "plástico", "vidrio", "cerámica",
        "anillo", "collar", "arete", "pulsera", "reloj", "bolsa",
        "risa", "llanto", "susurro", "grito", "silencio", "ruido",
        "jardín", "parque", "bosque", "playa", "montaña", "campo",
        "alegre", "triste", "serio", "juguetón", "inteligente", "tonto",
        "rápido", "lento", "alto", "bajo", "grande", "pequeño",
        "antiguo", "moderno", "nuevo", "viejo", "rico", "pobre",
        "dulce", "salado", "amargo", "picante", "ácido", "insípido",
        "día", "noche", "amanecer", "atardecer", "mediodía", "medianoche",
        "risueño", "serio", "travieso", "cariñoso", "dormido", "despierto"];
    var indexRandom = Math.floor(Math.random() * words.length);
    return words[indexRandom];
}

random.getText = randomText;

export default random;