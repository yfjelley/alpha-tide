import os
from pathlib import Path

from django.conf import settings
from django.http import FileResponse, Http404


def index(request):
  """
  Serve the built React single-page app as the root page.

  Expected location (after `npm run build` and copy):
  alphatide_site/static/landing/index.html
  """
  index_path = Path(settings.BASE_DIR) / "static" / "landing" / "index.html"

  if not index_path.is_file():
    raise Http404("前端构建文件不存在，请先在根目录运行 `npm run build` 并将 dist 拷贝到 alphatide_site/static/landing/。")

  return FileResponse(open(index_path, "rb"), content_type="text/html")
