function explode(s) {
    const explode = s => s.replace(/\d/g, d => d.repeat(d));
}

explode("102269")