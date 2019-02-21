import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="http://localhost:3000/files/1ded785592ff172b101835d1e9c5cde9-IMG_4216.JPG">
          <div>
            <strong></strong>
            <span>64kb <button onClick={() => {}}>Excluir</button></span>
          </div>
        </Preview>
        </FileInfo>
        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24},
              path: { stroke: '#7159c1'}
            }}
            strokeWidth={10}
            percentage={60}
          />
        </div>
    </li>
  </Container>
);

export default FileList;
