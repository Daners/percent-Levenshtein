function levenshtein(s,t){

if(s == null || t==null){
   throw {name : "null String",message:"Strings must not be null"}
}

var n = s.length;
var m = t.length;

 if (n === 0) {
    return m;
} else if (m === 0) {
    return n;
}

if (n > m) {
            // swap the input strings to consume less memory
            var tmp = s;
            s = t;
            t = tmp;
            n = m;
            m = t.length;
        }

        var pArr = []; //'previous' cost array, horizontally
        var dArr = []; // cost array, horizontally
        var _dArr = []; //placeholder to assist in swapping p and d

 // indexes into strings s and t
        var i; // iterates through s
        var j; // iterates through t

        var t_j; // jth character of t

        var cost; // cost

  for (i = 0; i<=n; i++) {
            pArr[i] = i;
        }

 for (j = 1; j<=m; j++) {
            t_j = t.charAt(j-1);
            dArr[0] = j;

            for (i=1; i<=n; i++) {
                cost = s.charAt(i-1)==t_j ? 0 : 1;
                // minimum of cell to the left+1, to the top+1, diagonally left and up +cost
                dArr[i] = Math.min(Math.min(dArr[i-1]+1, pArr[i]+1),  pArr[i-1]+cost);
            }

            // copy current distance counts to 'previous row' distance counts
            _dArr = pArr;
            pArr = dArr;
            dArr = _dArr;
        }

        // our last action in the above loop was to switch d and p, so p now
        // actually has the most recent cost counts
        return _dArr[n];
}

function percentLevenshtein(s1,s2){

    var leve = levenshtein(s1,s2);

    var percent = 100 - leve * 100 /  (s1.length + s2.length);

    return percent;

}
