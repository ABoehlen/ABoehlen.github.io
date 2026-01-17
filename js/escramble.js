// EScrambled Email Address Code
// For help with this code go to
// http://innerpeace.org/escrambler.shtml

function escramble(){
  var a, b, c, d, e, f, g, h, i

  a='<a href=\"mai'
  b='a.boehlen'
  c='\">'
  a+='lto:'
  b+='@'
  e='</a>'
  f='a.boehlen (at) bluewin.ch'
  b+='bluewin.ch'
  g='<img src=\"'
  h=''
  i='\" alt="Email us." border="0">'
  
  if (f) d = f
  else if (h) d = g + h + i
  else d = b
  
  document.write(a + b + c + d + e)
}
