function ob(a){var b;do {b = 0;for (var i=0; i < a.length-1; i++) {if (a[i] > a[i+1]) {var c = a[i];a[i] = a[i+1];a[i+1] = c;b = 1;}}} while (b);return a;}
