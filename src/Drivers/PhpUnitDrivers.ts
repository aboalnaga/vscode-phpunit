'use strict';

import PhpUnitDriverInterface from './PhpUnitDriverInterface';
import Path from './PathDriver';
import Composer from './ComposerDriver';
import Phar from './PharDriver';
import GlobalPhpUnit from './GlobalPhpUnitDriver';
import Docker from './DockerDriver';
import Ssh from './SshDriver';
import Legacy from './LegacyDriver';

export default {
    Path,
    Composer,
    Phar,
    GlobalPhpUnit,
    Docker,
    Ssh,
    Legacy
}